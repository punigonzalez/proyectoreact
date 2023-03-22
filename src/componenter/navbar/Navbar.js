import  './Navbar.css'
import logo from './assets/294547.svg'
import Button from '../Button/button'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    return (
        <nav>
            <div class="Navbar">
                <Button label="Hombre" callback={()=> console.log('Celulares')}/>
                <Button label="Mujer" callback={()=> console.log('Tablets')}/>
                <Button label="Niños" callback={()=> console.log('Notebooks')}/>
                <CartWidget/>
            </div>
            

        </nav>
    
    )
}
export default Navbar