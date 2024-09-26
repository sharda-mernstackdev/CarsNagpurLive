import React, { useState } from 'react';
import { X } from 'lucide-react'; // Ensure lucide-react is installed with: npm install lucide-react
import axios from 'axios'; // Ensure axios is installed with: npm install axios
import { useNavigate } from 'react-router-dom'; // Ensure react-router-dom is installed with: npm install react-router-dom

// Input component with styles
const Input = ({ className = '', ...props }) => (
  <input
    className={`appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
    {...props}
  />
);

// Button component with styles
const Button = ({ className = '', ...props }) => (
  <button
    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${className}`}
    {...props}
  />
);

// Modal component to display content in a modal
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full overflow-hidden">
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

// Main login component
export function Login() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneSubmitted, setIsPhoneSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  // Handle phone number form submission
  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid phone number.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/send-otp', { phoneNumber });
      setIsPhoneSubmitted(true);
      setError('');
      console.log(response);
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP input change
  const handleOtpChange = (element, event) => {
    const value = event.target.value;
    if (isNaN(Number(value))) return; // Ensure only numeric input
    const newOtp = [...otp];
    newOtp[element] = value;
    setOtp(newOtp);

    // Move focus to next input field automatically
    if (element < 3 && value !== '') {
      const nextInput = document.getElementById(`otp-${element + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  // Handle OTP form submission
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length < 4) {
      setError('Please enter a complete OTP.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/verify-otp', { phoneNumber, otp: otpValue });
      console.log('OTP verified:', response.data);
      setError('');
      navigate('/home'); // Redirect user after successful OTP verification
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Validate phone number format
  const validatePhoneNumber = (phoneNumber) => {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(String(phoneNumber).toLowerCase());
  };

  // Handle closing of modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <div className="flex flex-col lg:flex-row bg-white">
        {/* Left side - Image section */}
        <div
          className="hidden lg:flex lg:w-1/2 bg-cover bg-center h-[340px] -mt-[56px]"
          style={{ backgroundImage: "url('https://media.istockphoto.com/id/1401715786/photo/happy-family-piggybacking-after-buying-a-new-car-in-a-showroom.jpg?s=612x612&w=0&k=20&c=hnNdjcrSmKQAsP4A7KFU_BWrJVMk2evUxaViNdo_LZA=')" }}
        >
          <div className="flex items-center h-full w-full bg-gray-900 bg-opacity-40">
            <div className="text-white px-20">
              <h1 className="text-4xl font-bold -mt-[-200px] -mr-[70px]">A whole new world of Cars</h1>
            </div>
          </div>
        </div>

        {/* Right side - Form section */}
        <div className="flex items-center justify-center w-full lg:w-1/2 p-8">
          <div className="max-w-lg w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-extrabold text-blue-900">Log in to continue</h2>
              <p className="mt-2 text-sm text-orange-600">Mobile number</p>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            {!isPhoneSubmitted ? (
              <form className="mt-8 space-y-6" onSubmit={handlePhoneSubmit}>
                <Input
                  id="phone-number"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="+91-999 999 9999"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Button type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Get OTP'}
                </Button>
              </form>
            ) : (
              <form className="mt-8 space-y-6" onSubmit={handleOtpSubmit}>
                <div className="flex justify-between space-x-2">
                  {[0, 1, 2, 3].map((element) => (
                    <Input
                      key={element}
                      id={`otp-${element}`}
                      name={`otp-${element}`}
                      type="text"
                      maxLength={1}
                      value={otp[element]}
                      onChange={(e) => handleOtpChange(element, e)}
                      className="w-16 h-16 text-center text-3xl"
                    />
                  ))}
                </div>
                <Button type="submit" disabled={loading}>
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Login;
