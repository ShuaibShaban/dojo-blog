import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data:blogs, isPending, error } = useFetch('https://api.npoint.io/9a4ef27941c326e0c114/blogs/');


    return ( 
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>loading...</div>}
         {blogs && <BlogList blogs={blogs} title= "All Blogs!" />}
        </div>
     );
}
 
export default Home;