import  {useState} from 'react'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box,Container,InputLabel,MenuItem,Select,TextField } from '@mui/material';
import testImage from "../../assets/images/test-image.jpg";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const NewBlogForm = () => {
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const [blog, setBlog] = useState({ title: "", description: "" ,"tags": {"data": []}});

  const handleChange = ({target}) =>{
     const {name ,value} = target;
     setBlog((currentUser) => ({
      ...currentUser,
      [name] : value
    }))

  }
  const puplish = async (e) => {
    e.preventDefault();


    try {
      const url = `http://localhost:1337/api/blogs`;
      if (blog.title && blog.description) {
        const {data} = await axios.post(url, {data:blog});
        console.log("res",data);
        navigate("/");
      }
    } catch (error) {
      console.log("user")
    }
  };
  function handleChangeImage(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [tag, setTag] = useState('');

  const handleChangeTag = (event) => {
    setTag(event.target.value );
  };

  return (
<Container maxWidth="md">
      <Box component="form" onSubmit={puplish} noValidate sx={{ mt: 1 }}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" onChange={handleChangeImage} />
      </Button>
      <img src={file ?file :testImage}  width="100%" height="600px"/>
      <Stack direction={'row'}>

          <TextField
            margin="normal"
            required
            id="title"
            label="Blog Title"
            name="title"
            autoComplete="title"
            autoFocus
            sx={{width:"80%"}}
            onChange={handleChange}
          />
          <InputLabel id="demo-simple-select-label">Tag</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={tag}
    label="Tag"
    onChange={handleChangeTag}
    name='tag'
    sx={{width:"20%",height:"55px",alignSelf:"center"}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>

  </Stack>
      <textarea
        className="form-control"
        rows="10"
        cols={100}
        placeholder="Your Blog ...."
        name ="description"
        style={{width:"100%",border:"1px solid black"}}
        onChange={handleChange}
        >
      </textarea>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Publish
          </Button>
        </Box>
    </Container>
  );
}

export default NewBlogForm;
