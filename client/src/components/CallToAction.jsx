import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about different painting techniques?
            </h2>
            <p className='text-gray-500 my-2'>
             Check out which painting technique is most appropriate for you.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://pintauncuadro.com/blogs/noticias/conoce-las-diferentes-tecnicas-de-pintura" target='_blank' rel='noopener noreferrer'>
                Learn about the different painting techniques
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://cdn.pixabay.com/photo/2019/05/06/16/56/watercolour-4183614_640.jpg" />
        </div>
    </div>
  )
}