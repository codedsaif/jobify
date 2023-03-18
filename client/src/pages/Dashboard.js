import { useEffect } from "react";

const Dashboard = () => {
  const fetchData = async () => {
    try {
      console.log("I am in try block");
      const response = await fetch("/api/v1");
      console.log("this is the response ", response);
      const data = await response.json();
      console.log(data);
      console.log("i am in fetch Data");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    console.log("hello buddy");
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
