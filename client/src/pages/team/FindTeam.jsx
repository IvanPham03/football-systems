import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
const index = () => {
  return (
    <div className="min-h-[1000px] p-24 bg-gray-300 ">
      <div className="flex flex-col items-center justify-between gap-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
      <Card sx={{ maxWidth: 345}}>
      <CardActionArea className='flex flex-col items-center justify-between'>
        <CardMedia
          component="img"
          image={"https://www.topgear.com/sites/default/files/2023/09/33136-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS208.jpg?w=1784&h=1004"}
          className='p-5'
          alt="team logo"
          style={{ objectFit: 'cover', width: '100%', height: '200px' }} // Ensure image fills container
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' ,color:'green',fontWeight:'bold'}}>
            team logo
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='flex flex-col'>
        <div className='mx-auto'>Thành viên</div>
        <img src={"https://www.topgear.com/sites/default/files/2023/09/33136-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS208.jpg?w=1784&h=1004"} alt="member" className='w-10 h-10 rounded-full mx-auto' /> {/* Adjust image size and style */}
      </CardActions>
    </Card>




        


      </div>
    </div>


  )
}

export default index
