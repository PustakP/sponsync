import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Plus, X } from 'lucide-react';
import Card from '../ui/Card';
import { indianCities } from '../../data/cities';
import { indianColleges } from '../../data/colleges';

interface SponsorshipTier {
  name: string;
  amount: string;
  benefits: string[];
}

interface EventFormData {
  title: string;
  description: string;
  date: string;
  location: string;
  college: string;
  expectedFootfall: string;
  eventType: string;
  brochureFile: File | null;
  pastSponsors: string[];
  sponsorshipTiers: SponsorshipTier[];
  contactEmail: string;
  contactPhone: string;
  websiteUrl: string;
}

export default function CreateEventForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<EventFormData>({
    title: '',
    description: '',
    date: '',
    location: '',
    college: '',
    expectedFootfall: '',
    eventType: '',
    brochureFile: null,
    pastSponsors: [''],
    sponsorshipTiers: [{ name: '', amount: '', benefits: [''] }],
    contactEmail: '',
    contactPhone: '',
    websiteUrl: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        brochureFile: e.target.files![0]
      }));
    }
  };

  const addSponsorshipTier = () => {
    setFormData(prev => ({
      ...prev,
      sponsorshipTiers: [...prev.sponsorshipTiers, { name: '', amount: '', benefits: [''] }]
    }));
  };

  const removeSponsorshipTier = (index: number) => {
    setFormData(prev => ({
      ...prev,
      sponsorshipTiers: prev.sponsorshipTiers.filter((_, i) => i !== index)
    }));
  };

  const addBenefit = (tierIndex: number) => {
    setFormData(prev => ({
      ...prev,
      sponsorshipTiers: prev.sponsorshipTiers.map((tier, i) => 
        i === tierIndex ? { ...tier, benefits: [...tier.benefits, ''] } : tier
      )
    }));
  };

  const removeBenefit = (tierIndex: number, benefitIndex: number) => {
    setFormData(prev => ({
      ...prev,
      sponsorshipTiers: prev.sponsorshipTiers.map((tier, i) => 
        i === tierIndex ? {
          ...tier,
          benefits: tier.benefits.filter((_, j) => j !== benefitIndex)
        } : tier
      )
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    navigate('/dashboard/events');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="bg-gray-800 border border-gray-700">
        <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-white">Event Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Event Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Event Type</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white"
                required
              >
                <option value="">Select Type</option>
                <option value="Technical">Technical</option>
                <option value="Cultural">Cultural</option>
                <option value="Sports">Sports</option>
                <option value="Business">Business</option>
                <option value="Academic">Academic</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">College/University</label>
              <select
                name="college"
                value={formData.college}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white"
                required
              >
                <option value="">Select College</option>
                {indianColleges.map((college, index) => (
                  <option key={index} value={college}>{college}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white"
                required
              >
                <option value="">Select City</option>
                {indianCities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Event Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Expected Footfall</label>
              <input
                type="number"
                name="expectedFootfall"
                value={formData.expectedFootfall}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Event Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Event Brochure</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-400">
                  <label className="relative cursor-pointer rounded-md font-medium text-indigo-400 hover:text-indigo-300">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      name="brochure"
                      onChange={handleFileChange}
                      className="sr-only"
                      accept=".pdf,.doc,.docx"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-400">PDF, DOC up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-gray-800 border border-gray-700">
        <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-white">Sponsorship Details</h2>

          <div className="space-y-4">
            {formData.sponsorshipTiers.map((tier, tierIndex) => (
              <div key={tierIndex} className="p-4 border border-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-white">Sponsorship Tier {tierIndex + 1}</h3>
                  {tierIndex > 0 && (
                    <button
                      type="button"
                      onClick={() => removeSponsorshipTier(tierIndex)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Tier Name</label>
                    <input
                      type="text"
                      value={tier.name}
                      onChange={(e) => {
                        const newTiers = [...formData.sponsorshipTiers];
                        newTiers[tierIndex].name = e.target.value;
                        setFormData(prev => ({ ...prev, sponsorshipTiers: newTiers }));
                      }}
                      className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white"
                      placeholder="e.g., Gold Sponsor"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300">Amount (₹)</label>
                    <input
                      type="number"
                      value={tier.amount}
                      onChange={(e) => {
                        const newTiers = [...formData.sponsorshipTiers];
                        newTiers[tierIndex].amount = e.target.value;
                        setFormData(prev => ({ ...prev, sponsorshipTiers: newTiers }));
                      }}
                      className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white"
                      placeholder="e.g., 100000"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Benefits</label>
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex gap-2">
                      <input
                        type="text"
                        value={benefit}
                        onChange={(e) => {
                          const newTiers = [...formData.sponsorshipTiers];
                          newTiers[tierIndex].benefits[benefitIndex] = e.target.value;
                          setFormData(prev => ({ ...prev, sponsorshipTiers: newTiers }));
                        }}
                        className="flex-1 rounded-lg bg-gray-700 border-gray-600 text-white"
                        placeholder="Add a benefit"
                        required
                      />
                      {benefitIndex > 0 && (
                        <button
                          type="button"
                          onClick={() => removeBenefit(tierIndex, benefitIndex)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addBenefit(tierIndex)}
                    className="flex items-center text-sm text-indigo-400 hover:text-indigo-300"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Benefit
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addSponsorshipTier}
              className="flex items-center text-indigo-400 hover:text-indigo-300"
            >
              <Plus className="w-5 h-5 mr-1" />
              Add Sponsorship Tier
            </button>
          </div>
        </div>
      </Card>

      <Card className="bg-gray-800 border border-gray-700">
        <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-white">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Contact Email</label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Contact Phone</label>
              <input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300">Event Website URL</label>
              <input
                type="url"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white"
                placeholder="https://"
              />
            </div>
          </div>
        </div>
      </Card>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => navigate('/dashboard/events')}
          className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
        >
          Create Event
        </button>
      </div>
    </form>
  );
}