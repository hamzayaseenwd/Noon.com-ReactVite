import React from 'react'
import Input from './Input'


const ResponsiveAppBar = () => {
  return (
    <div>
      <div>
        <nav style={{ backgroundColor: '[#feee00]', }} className='bg-[#feee00]' >
 
          <div className='flex flex-wrap content-center justify-around'>
            <div className='p-4'><img src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" alt="" /></div>
            
              <div className='flex flex-wrap content-center items-center '>
              <div><img src="https://f.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="" /></div>
              <div><p className='m-1'>Deliver to <br /> Dubai</p></div>
              </div>
              <div>
              <Input
                id="SearchBar"
                placeholder="What are you looking for?"
                width="150px"
                type="Text" />
              </div>
                
              <div className='flex flex-wrap content-center '>
                <p> العریبہ</p>
              </div>
              <div className='flex flex-wrap content-center '>
                <p> | </p>
              </div>
              <div className='flex flex-wrap content-center '>
                <p>Log in </p>
                <p> <img src="https://f.nooncdn.com/s/app/com/noon/icons/user_thin.svg" alt="" /> </p>
              </div>
              <div className='flex flex-wrap content-center '>
                <p> | </p>
              </div>
              <div className='flex flex-wrap content-center '>
                <p>Wishlist </p>
                <p> <img src="https://f.nooncdn.com/s/app/com/noon/icons/wishlist.svg" alt="" /> </p>
              </div>
              <div className='flex flex-wrap content-center '>
                <p> | </p>
              </div>
              <div className='flex flex-wrap content-center '>
                <p>Cart </p>
                <p> <img src="https://f.nooncdn.com/s/app/com/noon/icons/cart.svg" alt="" /> </p>
              </div>
              
              


            {/* </div> */}

          </div>
        </nav>


      </div>




    </div>
  )
}

export default ResponsiveAppBar