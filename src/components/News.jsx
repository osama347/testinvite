import React from 'react'
import { Carousel } from 'antd'
import { Button } from 'flowbite-react'
import reactlogo from '../assets/react.svg'
import news1 from '../assets/news1.svg'
import news2 from '../assets/news2.svg'
import news3 from '../assets/news3.svg'
import news4 from '../assets/news4.svg'
import news5 from '../assets/news5.svg'
import news6 from '../assets/news6.svg'
import news7 from '../assets/news7.svg'
import news8 from '../assets/news8.svg'
import news10 from '../assets/news10.svg'

const newsdata = [
    {
      key: '1',
      title: "News title1",
      description: "any description related to this",
      imgurl: news1,
    },
    {
      key: '2',
      title: "News title2",
      description: "any description related to this",
      imgurl: news2,
    },
    {
      key: '3',
      title: "News title3",
      description: "any description related to this",
      imgurl: news3,
    },
    {
      key: '4',
      title: "News title4",
      description: "any description related to this",
      imgurl: news4,
    },
    {
      key: '5',
      title: "News title5",
      description: "any description related to this",
      imgurl: news5,
    },
    {
      key: '6',
      title: "News title6",
      description: "any description related to this",
      imgurl: news6,
    },
    {
      key: '7',
      title: "News title7",
      description: "any description related to this",
      imgurl: news7,
    },
    {
      key: '8',
      title: "News title8",
      description: "any description related to this",
      imgurl: news8,
    },
    {
      key: '10',
      title: "News title10",
      description: "any description related to this",
      imgurl: news10,
    },
  ];
  

const NewsCard = ({ imgurl, title, description,key }) => {
    return (
      <div className="relative h-screen">
      {/* Background Image */}
      <img
        src={imgurl}
        alt=""
        className="object-contain h-full w-full absolute top-0 left-0 z-0 rounded-2xl"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 "></div>

      {/* Content */}
      <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center items-center flex flex-col">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg mt-4">{description}</p>
        <Button className="mt-5 w-[100px] hover:bg-white">Details</Button>
      </div>
    </div>
    );
  };
  
  


function News() {
  return (
    <div
    className=''
    >
        
        <Carousel autoplay
    effect='fade'
  
    >
    
    {
        newsdata.map((newdata)=>{
            return(
                <NewsCard  imgurl={newdata.imgurl} title={newdata.title} description={newdata.description} key={newdata.key}  />
            )
        })
    }
    
  </Carousel>


      
   
    </div>
  )
}

export default News