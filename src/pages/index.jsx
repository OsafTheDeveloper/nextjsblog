import Card from "@/components/Card";
import Header from "@/components/Header";
import axios from "axios";

const Index = ({ data }) => {
  const blog = data.slice(0, 6);
  return (
    <>
      <div className="w-full h-full overflow-x-hidden ">
        {/* <Header /> */}
        <Card data={blog} />
      </div>
    </>
  );
};
export async function getServerSideProps() {
  try {
    const res = await axios.get("http://localhost:3000/api/blog");
    const data = res.data.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error, "from ServerSideProps");
    return {
      props: {
        data: null,
      },
    };
  }
}
export default Index;
