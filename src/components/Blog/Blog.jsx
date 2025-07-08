import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,cover,author_img,reading_time,author,posted_date}=blog;
    return (
        <div>
           
            <img src={cover} alt={`Cover picture of the title  ${title}`} />
            <div className='md:flex justify-between items-center'>
               <div className='md:flex items-center'>
                 <img src={author_img} alt=""  className='w-13 h-13 rounded-full'/>
                 <div className='ml-6'>
                    <h1 className='text-3xl font-bold'>{author}</h1>
                 <h1 className='text-2xl'>{posted_date}</h1>
                 </div>
               </div>
                <span>{reading_time }min read</span>
            </div>
             <h1 className='texr-4xl'>Title:{title}</h1>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;