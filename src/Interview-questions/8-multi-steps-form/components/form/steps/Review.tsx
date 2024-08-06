import { useFormContext } from '../../../context/useFormContext'

const ReviewAndConfirmation = () => {
  const { data: formData } = useFormContext()

  return (
    <div className='flex justify-center items-center bg-gray-100'>
      <div className='bg-white shadow-sm rounded-lg p-6 w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Review and Confirmation</h1>
        {/* personal */}
        <div className='mb-4'>
          <h2 className='text-xl font-semibold'>Personal Information</h2>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <span className='font-semibold'>Full Name:</span>
              <span>{formData.personal_information?.fullName}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-semibold'>Birth Date:</span>
              <span>{formData.personal_information?.birthDate}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-semibold'>Gender:</span>
              <span>{formData.personal_information?.gender}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-semibold'>Email:</span>
              <span>{formData.personal_information?.email}</span>
            </div>
          </div>
        </div>
        {/* professional */}
        <div className='mb-4'>
          <h2 className='text-xl font-semibold'>Professional Information</h2>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <span className='font-semibold'>Occupation:</span>
              <span>{formData.profession_information?.occupation}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-semibold'>Company:</span>
              <span>{formData.profession_information?.companyName}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-semibold'>Experience:</span>
              <span>
                {formData.profession_information?.yearsOfExperience} years
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='font-semibold'>Skills:</span>
              <span>{formData.profession_information?.skills}</span>
            </div>
          </div>
        </div>
        {/* addres */}
        <div className='mb-4'>
          <h2 className='text-xl font-semibold'>Address</h2>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <span className='font-semibold'>Street:</span>
              <span>{formData.address?.street}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-semibold'>City:</span>
              <span>{formData.address?.city}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-semibold'>State:</span>
              <span>{formData.address?.state}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-semibold'>Postal Code:</span>
              <span>{formData.address?.postalCode}</span>
            </div>
          </div>
        </div>
        {/* details */}
        <div className='mb-4'>
          <h2 className='text-xl font-semibold'>Contact Details</h2>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <span className='font-semibold'>Phone Number:</span>
              <span>{formData.contact_details?.phoneNumber}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-semibold'>Alternate Phone:</span>
              <span>{formData.contact_details?.alternatePhoneNumber}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-semibold'>Contact Preferences:</span>
              <span>{formData.contact_details?.contactPreferences}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewAndConfirmation
