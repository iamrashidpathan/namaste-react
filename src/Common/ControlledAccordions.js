import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CDN_URL } from '../utils/constants';

export default function ControlledAccordions(props) {
    // debugger
    const [expanded, setExpanded] = React.useState(false);
    const [itemCards, setItemCards] = React.useState()
    React.useEffect(()=>{
        setItemCards(props.menuData.itemCards)
        // debugger
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
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {props.menuData?.title}
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
             {itemCards.map((el,i)=>{
                // console.log(el.card.info)
                let currItem =el.card.info
                return(
                    <div className='menu-container' key={i}>
                        <span>{currItem.name} </span>  
                        {currItem.ribbon.text}
                        <span>Rs.{currItem.price/100}</span>
                        {currItem.showImage ?<img
                        className="menu-logo"
                        alt="menu-logo"
                        src={CDN_URL + currItem.imageId}
                        />:
                        <img
                        className="menu-logo"
                        alt="menu-logo"
                        src="https://openclipart.org/image/800px/289282"
                        />}
                </div>
                )
            }) }
          </Accordion>  
          }    
    </div>
  );
}