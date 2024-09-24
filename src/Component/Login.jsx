import React, { useState } from 'react';

// Custom Input component
const Input = ({ className = '', ...props }) => (
  <input
    className={`appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
    {...props}
  />
);

// Custom Button component
const Button = ({ className = '', ...props }) => (
  <button
    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

export function Login() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneSubmitted, setIsPhoneSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid phone number.');
      return;
    }

    setLoading(true);
    // Here you would typically send the phone number to your backend to generate and send the OTP
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsPhoneSubmitted(true);
      setError('');
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (element, event) => {
    const value = event.target.value;
    if (isNaN(Number(value))) return; // Ensure only numbers are entered
    const newOtp = [...otp];
    newOtp[element] = value;
    setOtp(newOtp);

    // Move to next input
    if (element < 3 && value !== '') {
      const nextInput = document.getElementById(`otp-${element + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length < 4) {
      setError('Please enter a complete OTP.');
      return;
    }

    setLoading(true);
    // Here you would verify the OTP with your backend
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('OTP submitted:', otpValue);
      setError('');
      // Handle successful OTP verification (e.g., redirect to another page)
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(String(phoneNumber).toLowerCase());
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1080')" }}>
        <div className="flex items-center h-full w-full bg-gray-900 bg-opacity-40">
          <div className="text-white px-20">
            <h1 className="text-5xl font-bold mb-6">Welcome Back</h1>
            <p className="text-xl">Log in to access your account and manage your services.</p>
          </div>
        </div>
      </div>

      {/* Right side - OTP Form */}
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Log in to your account</h2>
            <p className="mt-2 text-sm text-gray-600">Enter your phone number to receive a one-time password</p>
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
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send OTP'}
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
  );
}

export default Login;