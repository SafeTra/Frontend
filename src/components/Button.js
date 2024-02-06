import {Link} from 'react-router-dom'

const Button = ({name}) => <button className="btn btn-form w-100" type="submit">{name}</button> 
export const BtnOutline = ({name, link}) => <Link to={`/${link}`} className='btn btn-outline'>{name}</Link>
export const BtnPrimary = ({name, link}) => <Link to={`/${link}`} className='btn btn-primary'>{name}</Link>

export default Button;