
import Card from './components/card'



const App = () => {
  const jobs = [
  {
    brandlogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    name: "Google",
    datePosted: "2 days ago",
    post: "Software Development Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    name: "Microsoft",
    datePosted: "5 days ago",
    post: "MERN Stack Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://fabrikbrands.com/wp-content/uploads/Oracle-Logo-History-4-864x540.png",
    name: "Oracle",
    datePosted: "3 days ago",
    post: "Java Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RQEXddOozTExqqN5MaK_mYSgamFpN4T2BB5cJ3G5SH3F0FboQNIoDdI&s=10",
    name: "IBM",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Ahmedabad, India"
  },
  {
    brandlogo: "https://static.cdnlogo.com/logos/a/89/adobe-thumb.png",
    name: "Adobe",
    datePosted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Senior Level",
    pay: "$40/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHJhzQTyoy3ldT-hNFp6xNZ_Oo2e-88GVo5bkgnRfCg&s=10",
    name: "Salesforce",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$44/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
    name: "Infosys",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$32/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaqBimiU40nIz5pLpegfCPkoQTp9_70-fLQS4PQa1sA&s=10",
    name: "TCS",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAlYj62YyjE7wDP1I1AAUUHmNF6xJQnMef82V2cIdAEQ&s=10",
    name: "Accenture",
    datePosted: "2 weeks ago",
    post: "Node.js Developer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$38/hr",
    location: "Bangalore, India"
  }
];

console.log(jobs)
  return (
    <div className='parent'>
      {jobs.map(function(elem){
        return <Card key = {elem.name} {...elem}/>
      })}
      

    </div>
  )
}

export default App
