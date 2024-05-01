import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import { Container } from "reactstrap";
import Sidebar from "./components/home/Sidebar";
import Navbar from "./components/home/Navbar";
import Dashboard from "./components/admin/Dashboard";
import MyBlog from "./components/admin/MyBlog";
import CreatePost from "./components/admin/CreatePost";

function App() {
  return (
    <Container fluid>
      <Sidebar />
      <Navbar />
      {/* Content Body */}
      <main>
        <div class="p-4 sm:ml-64 bg-white rounded-2xl h-fit">
          <div class="p-4  border-gray-200  rounded-lg dark:border-gray-700">

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/myblog" element={<MyBlog />} />
              <Route path="/createPost" element={<CreatePost />} />
            </Routes>

          </div>
        </div>
      </main>
    </Container>
  );
}

export default App;
