import PropTypes from 'prop-types';
import { MdOutlineBookmarks } from "react-icons/md";

const Blog = ({blog,handleAddToBoormark}) => {
    const {title,cover,author_img,reading_time,author,posted_date,hashtags}=blog;
    return (
        <div className='mb-20'>
           
            <img className='w-full ' src={cover} alt={`Cover picture of the title  ${title}`} />
            <div className='md:flex justify-between items-center mt-5'>
               <div className='md:flex items-center'>
                 <img src={author_img} alt=""  className='w-13 h-13 rounded-full'/>
                 <div className='ml-6'>
                    <h1 className='text-3xl font-bold'>{author}</h1>
                 <h1 className='text-2xl'>{posted_date}</h1>
                 </div>
               </div>
               <div className='items-center' >
                 <span  className='text 2xl font-semibold'  >{reading_time }min read</span>
                <button onClick={() =>handleAddToBoormark(blog)} className='ml-3 text-sky-600 text-4xl gt-4'><MdOutlineBookmarks></MdOutlineBookmarks></button>
               </div>
            </div>
             <h1 className='text-4xl'>{title}</h1>
             <p className='font-bold'>{hashtags}</p>
             <button className=''>Mark as read</button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;