import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2">
            <div>
                <h3 className="text-4xl text-center font-bold text-purple-700">Reading Time:{readingTime}</h3>
            </div>
            <h1 className="text-3xl text-center pt-4">Bookmark Blogs:{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark
                    key={idx} 
                    bookmark={bookmark}
                    ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;