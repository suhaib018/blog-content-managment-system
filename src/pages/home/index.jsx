
import CardComponent from "../../components/card"
import useFetch from "../../api/useFetch";
import { Container, Grid } from "@mui/material";

const HomePage = () => {
  let {loading,error,data} = useFetch('http://localhost:1337/api/blogs?populate=*');

  if (loading) return <p>Loading ...</p>
  if(error) return <p>Error !</p>

  console.log()
   return (
    <Container >
          <Grid container spacing={10}  alignItems="center">

      {
        data?.data?.map(item => {
          console.log("item",item)
          return (
            <Grid item sm={10} md={6} lg={4} key={item?.id}>
              <CardComponent key={item.id} data={item}/>
          </Grid>
          )
        })
      }
</Grid>

    </Container>
  )
}

export default HomePage
