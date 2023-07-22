import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CDN_URL } from '../utils/constants';

export default function ControlledAccordions(props) {
    const [expanded, setExpanded] = React.useState(props.openOnLoad);
    const [itemCards, setItemCards] = React.useState()
    React.useEffect(()=>{
        setItemCards(props.menuData.itemCards)
    })
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
            {itemCards &&<Accordion expanded={expanded === props.menuData?.title} onChange={handleChange(props.menuData?.title)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography  sx={{ width: '33%', flexShrink: 0 }}>
                <span className='font-bold'>{props.menuData?.title} {`(${itemCards.length})`}</span>
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
             {itemCards.map((el,i)=>{
                // console.log(el.card.info)
                let currItem =el.card.info
                return(
                    <div className='menu-container border-b-2 pb-1' key={i}>
                        <span className='basis-1/4 text-lg'>{currItem.name}
                          <br/><span style={{fontSize:"12px"}}>{currItem.ratings.aggregatedRating.rating && currItem.ratings.aggregatedRating.rating+"⭐" +" "+ currItem.ratings.aggregatedRating.ratingCount}</span>
                        </span>  
                        <span className='basis-1/4'>{currItem.ribbon.text}</span>
                        <span className='basis-1/4'>{currItem.price ? <span>₹ {currItem.price/100}</span>: <span>₹ {currItem.defaultPrice/100}</span>}</span>
                        <span className='basis-1/4'>
                        <div className='text-center mx-auto'>
                          <button className='absolute my-1 bg-green-400 hover:bg-green-300 p-1 rounded-md font-bold text-sm'>ADD</button>
                        </div>  
                        {currItem.showImage ?<img
                        className="menu-logo"
                        alt="menu-logo"
                        src={CDN_URL + currItem.imageId}
                        />:
                        <img
                        className="menu-logo h-[120px]"
                        alt="menu-logo"
                        src="https://openclipart.org/image/800px/289282"
                        />}
                        </span>
                        
                </div>
                )
            }) }
          </Accordion>  
          }    
    </div>
  );
}