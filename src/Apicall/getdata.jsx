import axios from "axios";

export const getdata = async (setdata, setloading) => {
  try {
    setloading(true);
    const response = await axios.get(
      "https://techcrunch.com/wp-json/wp/v2/posts?per_page=10"
    );
    setdata(response.data);
    setloading(false);
  } catch (error) {
    console.error("Error fetching data:", error);
    setloading(false);
  }
};