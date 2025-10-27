
const Footer = () => {
  return (
    <footer className='bg-white w-full py-8'>
      <div className="max-w-6xl mx-auto px-4">
        {/* Horizontal Line */}
        <hr className="w-full max-w-[1000px] mx-auto border-t-2 border-amber-400 mb-6" />
        
        {/* Copyright Text */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} EduLift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer