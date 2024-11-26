import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Users, Search } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { indianColleges } from '../data/colleges';

type UserRole = 'organizer' | 'sponsor' | null;

interface ValidationErrors {
  password?: string;
  confirmPassword?: string;
}

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<UserRole>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    organizationName: '',
    employeeId: ''
  });

  const filteredColleges = React.useMemo(() => {
    return indianColleges.filter(college => 
      college.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setStep(2);
  };

  const validatePassword = (password: string): boolean => {
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasMinLength || !hasUpperCase || !hasNumber || !hasSpecialChar) {
      setErrors(prev => ({
        ...prev,
        password: 'Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character'
      }));
      return false;
    }
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleCollegeSelect = (college: string) => {
    setFormData(prev => ({
      ...prev,
      organizationName: college
    }));
    setSearchQuery('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validatePassword(formData.password)) {
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors(prev => ({
        ...prev,
        confirmPassword: 'Passwords do not match'
      }));
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (role === 'organizer') {
        navigate('/dashboard');
      } else {
        navigate('/sponsor/dashboard');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            {step === 1 ? 'Choose Your Role' : 'Create Your Account'}
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            {step === 1 ? "Select how you'll be using SponSync" : 'Fill in your details to get started'}
          </p>
        </div>

        {step === 1 ? (
          <div className="grid grid-cols-1 gap-4">
            <button 
              onClick={() => handleRoleSelect('organizer')}
              className="p-4 rounded-lg border-2 border-gray-700 hover:border-primary-500 hover:bg-primary-900 text-gray-300 transition duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-800 rounded-lg">
                  <Users className="w-6 h-6 text-primary-300" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Event Organizer</h3>
                  <p className="text-sm text-gray-400">I want to find sponsors for my event</p>
                </div>
              </div>
            </button>

            <button 
              onClick={() => handleRoleSelect('sponsor')}
              className="p-4 rounded-lg border-2 border-gray-700 hover:border-primary-500 hover:bg-primary-900 text-gray-300 transition duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-800 rounded-lg">
                  <Building2 className="w-6 h-6 text-primary-300" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Corporate Sponsor</h3>
                  <p className="text-sm text-gray-400">I want to sponsor college events</p>
                </div>
              </div>
            </button>
          </div>
        ) : (
          <Card className="bg-gray-800 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6 p-6">
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-gray-700 text-white border-gray-600"
              />

              <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
                required
                className="bg-gray-700 text-white border-gray-600"
              />

              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={errors.confirmPassword}
                required
                className="bg-gray-700 text-white border-gray-600"
              />

              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="bg-gray-700 text-white border-gray-600"
              />

              {role === 'organizer' ? (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Institution Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for your institution..."
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-900 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                      
                    />
                    <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  {searchQuery && (
                    <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
                      {filteredColleges.map((college, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleCollegeSelect(college)}
                          className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-primary-900 focus:bg-primary-900"
                        >
                          {college}
                        </button>
                      ))}
                    </div>
                  )}
                  {formData.organizationName && (
                    <p className="text-sm text-primary-400">
                      Selected: {formData.organizationName}
                    </p>
                  )}
                </div>
              ) : (
                <Input
                  label="Employee ID"
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700 text-white border-gray-600"
                />
              )}

              <div className="flex flex-col space-y-4">
                <Button 
                  type="submit"
                  isLoading={isLoading}
                  className="bg-primary-600 hover:bg-primary-500"
                >
                  Create Account
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="border-primary-500 text-primary-400 hover:bg-primary-900"
                >
                  Back
                </Button>
              </div>
            </form>
          </Card>
        )}

        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary-400 hover:text-primary-300">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}