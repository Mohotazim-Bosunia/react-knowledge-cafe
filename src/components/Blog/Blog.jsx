

const Blog = ({blog}) => {
    const {title,cover}=blog;
    return (
        <div>
            <h1>Title:{title}</h1>
            <img src={cover} alt="" />
        </div>
    );
};

export default Blog;