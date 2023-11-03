import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Form } from '@remix-run/react'

export default function CandidateForm() {
  return (
    <Form method='post'>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            California Secretary of State Information
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            This information was provided from the Secretary of State of
            California. If any of this informaiton is inacurate please contact
            the Secretary of State to make any corrections.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                First name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='bg-gray-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 cursor-not-allowed'
                  disabled
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Last name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='bg-gray-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 cursor-not-allowed'
                  disabled
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='candidate-url'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Official candidate URL
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='candidate-url'
                  id='candidate-url'
                  autoComplete='url'
                  className='bg-gray-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 cursor-not-allowed'
                  disabled
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='official-email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Official candidate email address
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='official-email'
                  id='official-email'
                  autoComplete='email'
                  className='bg-gray-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 cursor-not-allowed'
                  disabled
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='political-party'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Political party
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='political-party'
                  id='political-party'
                  autoComplete='off'
                  className='bg-gray-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 cursor-not-allowed'
                  disabled
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='candidate-occupation'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Occupation (official ballot designation)
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='candidate-occupation'
                  id='candidate-occupation'
                  autoComplete='off'
                  className='bg-gray-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 cursor-not-allowed'
                  disabled
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='candidate-facebook'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Facebook profile
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='candidate-facebook'
                  id='candidate-facebook'
                  autoComplete='url'
                  className='bg-gray-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 cursor-not-allowed'
                  disabled
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='candidate-linkedin'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                LinkedIn profile
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='candidate-linkedin'
                  id='candidate-linkedin'
                  autoComplete='url'
                  className='bg-gray-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 cursor-not-allowed'
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            League of Women Voters Information
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            The information contained in this section is being given to the
            League of Women Voters and will be displayed publically on Voter's
            Edge. Please inlude only things that you would display publicly.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='col-span-full'>
              <label
                htmlFor='photo'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Photo
              </label>
              <div className='mt-2 flex items-center gap-x-3'>
                <UserCircleIcon
                  className='h-12 w-12 text-gray-300'
                  aria-hidden='true'
                />
                <button
                  type='button'
                  className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                >
                  Change
                </button>
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='first-priority'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Candidates first priority
              </label>
              <div className='mt-2'>
                <input
                  id='first-priority'
                  name='first-priority'
                  type='text'
                  autoComplete='off'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='second-priority'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Candidates second priority
              </label>
              <div className='mt-2'>
                <input
                  id='second-priority'
                  name='second-priority'
                  type='text'
                  autoComplete='off'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='third-priority'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Candidates third priority
              </label>
              <div className='mt-2'>
                <input
                  id='third-priority'
                  name='third-priority'
                  type='text'
                  autoComplete='off'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='endorsements-organizations'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Candidate endorsements (organizations)
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='endorsements-organizations'
                  id='endorsements-organizations'
                  autoComplete='off'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='endorsements-individuals'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Candidate endorsements (individuals)
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='endorsements-individuals'
                  id='endorsements-individuals'
                  autoComplete='url'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='candidate-info'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Additional candidate info
              </label>
              <p className='mt-3 text-sm leading-6 text-gray-600'>
                Is there anything else you would like to add?
              </p>
              <div className='mt-2'>
                <textarea
                  id='candidate-info'
                  name='candidate-info'
                  rows={3}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='candidate-biography'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Candidate biography
              </label>
              <p className='mt-3 text-sm leading-6 text-gray-600'>
                Write a few sentences about yourself.
              </p>
              <div className='mt-2'>
                <textarea
                  id='candidate-biography'
                  name='candidate-biography'
                  rows={3}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='political-philosophy'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Political philosophy
              </label>
              <p className='mt-3 text-sm leading-6 text-gray-600'>
                Write a few sentences about your political philosophy.
              </p>
              <div className='mt-2'>
                <textarea
                  id='political-philosophy'
                  name='political-philosophy'
                  rows={3}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='button'
          className='text-sm font-semibold leading-6 text-gray-900'
        >
          Clear form
        </button>
        <button
          type='submit'
          className='rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
        >
          Submit
        </button>
      </div>
    </Form>
  )
}
