import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




export default function Createpost() {
    return (
        <div className='p-3 max-w-3xl mx-auto min-h-screen'>
          <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
              <TextInput
                type='text'
                placeholder='Title'
                required
                id='title'
                className='flex-1'
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <Select
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value='uncategorized'>Select a painting techniques</option>
                <option value='Acrylic'>Acrylic</option>
                <option value='Pastel'>Pastel</option>
                <option value='Watercolor'>Watercolor</option>
              </Select>
            </div>
            <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
              <FileInput
                type='file'
                accept='image/*'
                onChange={(e) => setFile(e.target.files[0])}
              />
              <Button
                type='button'
                gradientDuoTone='purpleToBlue'
                size='sm'
                outline
                onClick={handleUpdloadImage}
                disabled={imageUploadProgress}
              >
                {imageUploadProgress ? (
                  <div className='w-16 h-16'>
                    <CircularProgressbar
                      value={imageUploadProgress}
                      text={`${imageUploadProgress || 0}%`}
                    />
                  </div>
                ) : (
                  'Upload Image'
                )}
              </Button>
            </div>
            {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
            {formData.image && (
              <img
                src={formData.image}
                alt='upload'
                className='w-full h-72 object-cover'
              />
            )}
            <ReactQuill
              theme='snow'
              placeholder='Write something...'
              className='h-72 mb-12'
              required
              onChange={(value) => {
                setFormData({ ...formData, content: value });
              }}
            />
            <Button type='submit' gradientDuoTone='purpleToPink'>
              Publish
            </Button>
            {publishError && (
              <Alert className='mt-5' color='failure'>
                {publishError}
              </Alert>
            )}
          </form>
        </div>
      );
    }