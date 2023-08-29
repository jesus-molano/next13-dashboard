import { CartCounter } from "@/app/shopping-cart/components"

const CounterPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Products in cart</span>
      <CartCounter items={2} />
    </div>
  )
}

export default CounterPage 
