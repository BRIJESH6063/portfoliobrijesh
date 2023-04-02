import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'
import { useEffect, useState, } from 'react' ;
import { featuredPortfolio,
          webPortfolio,
          mobilePortfolio,
          designPortfolio, 
          contentPortfolio
        } from '../../data';

export default function portfolio() {
  const [selected, setSelected] = useState('featured') ;
  const [data, setData] = useState([]) ;
  const list = [
    {id : "featured", title : "Featured"},
    {id : "web", title : "Web App"},
    {id : "mobile", title : "Mobile App"},
    {id : "design", title : "Design"},
    {id : "content", title : "Content"},
  ] ;

  useEffect(()=>{
    switch(selected) {
      case "featured" :
        setData(featuredPortfolio) ;
        break ; 
      case "web" :
        setData(webPortfolio) ;
        break ;
      case "mobile" :
        setData(mobilePortfolio) ;
        break ;
      case "design" :
        setData(designPortfolio) ;
        break ;
      default : 
        setData(contentPortfolio) ;
    }
  }, [selected])
  return (
    <div className='portfolio' id = 'portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {/* <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Designing</li>
        <li>Branding</li> */}

        {list.map((item)=>(
          <PortfolioList title = {item.title} 
          active = {selected === item.id} 
          setSelected = {setSelected}
          id = {item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
          <div className="item">
            <img src={d.img}
            alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
        
        
      </div>
    </div>
  )
}
