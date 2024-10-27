'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const brands = ['Tata', 'Toyota', 'Honda', 'Ford', 'Hyundai', 'Mahindra', 'Nissan', 'Volkswagen', 'BMW', 'Audi', 'Other']
const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid']

export  function CarUpload() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    carName: '',
    brand: '',
    kilometer: 0,
    fuelType: '',
    owner: '',
    price: 0,
    description: '',
  })
  const [images, setImages] = useState([])
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fileInputRef = useRef(null)
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64String = reader.result;
        
        // Create a new image object with the base64 string
        const newImage = {
          file, // original file
          preview: URL.createObjectURL(file), // for preview purposes
          base64: base64String, // base64 encoded image
        };
        
        // Update the state with the new image
        setImages((prev) => [...prev, newImage]);
      };
      
      reader.onerror = (error) => {
        console.error('Error converting image to base64:', error);
        setErrors((prev) => ({ ...prev, images: 'Error processing image' }));
      };
    });
  
    setErrors((prev) => ({ ...prev, images: '' }));
  };
  
  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };
  
  const validateForm = () => {
    const newErrors = {}
    if (!formData.carName.trim()) newErrors.carName = 'Car name is required'
    if (!formData.brand) newErrors.brand = 'Brand is required'
    if (formData.kilometer < 0) newErrors.kilometer = 'Kilometer must be positive'
    if (!formData.fuelType) newErrors.fuelType = 'Fuel type is required'
    if (!formData.owner.trim()) newErrors.owner = 'Owner name is required'
    if (formData.price <= 0) newErrors.price = 'Price must be greater than 0'
    if (formData.description.length < 10) newErrors.description = 'Description must be at least 10 characters'
    if (images.length === 0) newErrors.images = 'At least one image is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   if (!validateForm()) return

  //   setIsSubmitting(true)
  //   try {
  //     // Simulating API call
  //     await new Promise((resolve) => setTimeout(resolve, 2000))
  //     console.log('Form submitted:', formData)
  //     console.log('Images:', images)
  //     setIsSubmitted(true)
  //   } catch (err) {
  //     console.error('Error submitting form:', err)
  //     setErrors((prev) => ({ ...prev, submit: 'Failed to submit form. Please try again.' }))
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/cars/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        navigate('/usedcars');
      } else {
        toast.error(data.message || 'car upload failed');
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (step < 6) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const renderStepIndicator = () => {
    return (
      <div className="step-indicator">
        {[1, 2, 3, 4, 5, 6].map((s) => (
          <div key={s} className={`step ${s <= step ? 'active' : ''}`}>
            {s}
          </div>
        ))}
      </div>
    )
  }

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-group">
            <label htmlFor="carName">Car Name</label>
            <input
              type="text"
              id="carName"
              name="carName"
              value={formData.carName}
              onChange={handleInputChange}
              placeholder="Enter car name"
            />
            {errors.carName && <p className="error">{errors.carName}</p>}

            <label htmlFor="brand">Brand</label>
            <select id="brand" name="brand" value={formData.brand} onChange={handleInputChange}>
              <option value="">Select brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand.toLowerCase()}>
                  {brand}
                </option>
              ))}
            </select>
            {errors.brand && <p className="error">{errors.brand}</p>}
          </div>
        )
      case 2:
        return (
          <div className="form-group">
            <label htmlFor="kilometer">Kilometer</label>
            <div className="slider-container">
              <input
                type="range"
                id="kilometer"
                name="kilometer"
                min="0"
                max="200000"
                step="1000"
                value={formData.kilometer}
                onChange={handleInputChange}
              />
              <span>{formData.kilometer} km</span>
            </div>
            {errors.kilometer && <p className="error">{errors.kilometer}</p>}

            <label htmlFor="fuelType">Fuel Type</label>
            <select id="fuelType" name="fuelType" value={formData.fuelType} onChange={handleInputChange}>
              <option value="">Select fuel type</option>
              {fuelTypes.map((fuel) => (
                <option key={fuel} value={fuel.toLowerCase()}>
                  {fuel}
                </option>
              ))}
            </select>
            {errors.fuelType && <p className="error">{errors.fuelType}</p>}
          </div>
        )
      case 3:
        return (
          <div className="form-group">
            <label htmlFor="owner">Owner</label>
            <input
              type="text"
              id="owner"
              name="owner"
              value={formData.owner}
              onChange={handleInputChange}
              placeholder="Enter owner's name"
            />
            {errors.owner && <p className="error">{errors.owner}</p>}

            <label htmlFor="price">Price (in ₹)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Enter price"
            />
            {errors.price && <p className="error">{errors.price}</p>}

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter car description"
            />
            {errors.description && <p className="error">{errors.description}</p>}
          </div>
        )
      case 4:
        return (
          <div className="form-group">
            <label>Car Images</label>
            <div
              className="dropzone"
              onClick={() => fileInputRef.current.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault()
                handleImageChange({ target: { files: e.dataTransfer.files } })
              }}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                multiple
                style={{ display: 'none' }}
              />
              <p>Drag and drop images here or click to upload</p>
            </div>
            {errors.images && <p className="error">{errors.images}</p>}
            <div className="image-preview">
              {images.map((image, index) => (
                <div key={index} className="image-preview-item">
                  <img src={image.preview} alt={`Preview ${index + 1}`} />
                  <button type="button" onClick={() => removeImage(index)} className="remove-image">
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      case 5:
        return (
          <div className="form-group summary">
            <h3>Summary</h3>
            <div className="summary-grid">
              <div>
                <p className="label">Car Name:</p>
                <p>{formData.carName}</p>
              </div>
              <div>
                <p className="label">Brand:</p>
                <p>{formData.brand}</p>
              </div>
              <div>
                <p className="label">Kilometer:</p>
                <p>{formData.kilometer} km</p>
              </div>
              <div>
                <p className="label">Fuel Type:</p>
                <p>{formData.fuelType}</p>
              </div>
              <div>
                <p className="label">Owner:</p>
                <p>{formData.owner}</p>
              </div>
              <div>
                <p className="label">Price:</p>
                <p>₹{formData.price}</p>
              </div>
            </div>
            <div>
              <p className="label">Description:</p>
              <p>{formData.description}</p>
            </div>
            <div>
              <p className="label">Images:</p>
              <div className="summary-images">
                {images.map((image, index) => (
                  <img key={index} src={image.preview} alt={`Preview ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        )
      case 6:
        return (
          <div className="form-group final-summary">
            <h3>Final Review</h3>
            <div className="summary-grid">
              <div>
                <p className="label">Car Name:</p>
                <p>{formData.carName}</p>
              </div>
              <div>
                <p className="label">Brand:</p>
                <p>{formData.brand}</p>
              </div>
              <div>
                <p className="label">Kilometer:</p>
                <p>{formData.kilometer} km</p>
              </div>
              <div>
                <p className="label">Fuel Type:</p>
                <p>{formData.fuelType}</p>
              </div>
              <div>
                <p className="label">Owner:</p>
                <p>{formData.owner}</p>
              </div>
              <div>
                <p className="label">Price:</p>
                <p>₹{formData.price}</p>
              </div>
            </div>
            <div>
              <p className="label">Description:</p>
              <p>{formData.description}</p>
            </div>
            <div>
              <p className="label">Images:</p>
              <div className="summary-images">
                {images.map((image, index) => (
                  <img key={index} src={image.preview} alt={`Preview ${index + 1}`} />
                ))}
              </div>
            </div>
            <p className="confirmation-text">Please review all details carefully before submitting.</p>
          </div>
        )
      default:
        return null
    }
  }

  if (isSubmitted) {
    return (
      <div className="container">
        <div className="hero">
          <div className="success-message">
            <h2>Success!</h2>
            <p>Your car details have been successfully submitted.</p>
            <button
              onClick={() => {
                setFormData({
                  carName: '',
                  brand: '',
                  kilometer: 0,
                  fuelType: '',
                  owner: '',
                  price: 0,
                  description: '',
                })
                setImages([])
                setIsSubmitted(false)
                setStep(1)
              }}
              className="button primary"
            >
              Submit Another Car
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="hero">
        <div className="hero-content">
          <h1>Professional Car Upload</h1>
          <p>List your car with ease and connect with potential buyers</p>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {renderStepIndicator()}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {renderForm()}
              </motion.div>
            </AnimatePresence>
            <div className="button-group">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="button secondary">
                  Previous
                </button>
              )}
              {step < 6 ? (
                <button type="button" onClick={nextStep} className="button primary">
                  Next
                </button>
              ) : (
                <button type="submit" disabled={isSubmitting} className="button primary">
                  {isSubmitting ? 'Uploading...' : 'Submit Car Details'}
                </button>
              )}
            </div>
          </form>
          {errors.submit && <div className="error">{errors.submit}</div>}
        </div>
      </div>
      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
          background-color: #f0f4f8;
        }
        .hero {
          background-image: url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
        }
        .hero-content {
          text-align: center;
          margin-bottom: 40px;
        }
        .hero h1 {
          font-size: 48px;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px  rgba(0,0,0,0.5);
        }
        .hero p {
          font-size: 24px;
          max-width: 600px;
          margin: 0 auto;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
        .form-container {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 600px;
        }
        .step-indicator {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .step {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #e2e8f0;
          color: #64748b;
          font-weight: bold;
        }
        .step.active {
          background-color: #f97316;
          color: white;
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #1e40af;
        }
        input[type="text"],
        input[type="number"],
        select,
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 16px;
          color: black;
        }
        input::placeholder,
        textarea::placeholder {
          color: black;
          opacity: 0.7;
        }
        select {
          color: black;
        }
        .slider-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        input[type="range"] {
          flex-grow: 1;
        }
        .dropzone {
          border: 2px dashed #e2e8f0;
          border-radius: 4px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: border-color 0.3s;
        }
        .dropzone:hover {
          border-color: #f97316;
        }
        .image-preview {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }
        .image-preview-item {
          position: relative;
        }
        .image-preview-item img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 4px;
        }
        .remove-image {
          position: absolute;
          top: 5px;
          right: 5px;
          background: #f97316;
          color: white;
          border: none;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .button-group {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
        .button {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s;
        }
        .button.primary {
          background-color: #f97316;
          color: white;
        }
        .button.secondary {
          background-color: #e2e8f0;
          color: #1e40af;
        }
        .button:hover {
          opacity: 0.9;
        }
        .button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .error {
          color: #ef4444;
          font-size: 14px;
          margin-top: 5px;
        }
        .success-message {
          text-align: center;
          background-color: rgba(255, 255, 255, 0.9);
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .success-message h2 {
          color: #22c55e;
          font-size: 24px;
          margin-bottom: 10px;
        }
        .summary h3, .final-summary h3 {
          color: #1e40af;
          font-size: 18px;
          margin-bottom: 15px;
        }
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
        .summary .label, .final-summary .label {
          font-weight: bold;
          color: #1e40af;
        }
        .summary-images {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }
        .summary-images img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 4px;
        }
        .confirmation-text {
          margin-top: 20px;
          font-weight: bold;
          color: #f97316;
        }
      `}</style>
    </div>
  )
}
export default CarUpload;