import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import BannerNav from "./BannerNav";
import axios from "axios";

let useStyles = makeStyles(() => ({
  loginForm: {
    justifyContent: "center",
    minHeight: "90vh",
    width: window.innerWidth > 500 ? 500 : 300,
    maxWidth: 700,
  },
  buttonBlock: {
    width: "100%",
  },
  loginBackground: {
    justifyContent: "center",
    minHeight: "30vh",
    padding: "50px",
  },
}));

function MainPage() {
  const styles = useStyles();

  const [open, setOpen] = React.useState(false);
  let [text, setText] = React.useState("");
  let [category, setCategory] = React.useState("نوع خبر");

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(text);

    const data = {
      text: text,
    };
    const url = "http://127.0.0.1:8000/classifier/predict/";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        if (res.data.category == "") {
          alert("مشکلی در ارتباط با سرور پیش آمد");
        }
        setCategory(res.data.category);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
        alert("مشکلی در ارتباط با سرور پیش آمد");
      });
  };

  return (
    <div>
      <BannerNav />
      <FormControl className={styles.FormControl}>
        <Grid container justify="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className={styles.loginForm}
            >
              <Paper
                variant="elevation"
                elevation={2}
                className={styles.loginBackground}
              >
                <Grid item>
                  <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="text"
                          placeholder="متن خبر را وارد کنید..."
                          fullWidth
                          name="text"
                          variant="outlined"
                          rows="4"
                          rowsMax="15"
                          multiline={true}
                          onChange={(event) => {
                            setText(event.target.value);
                          }}
                          required
                          autoFocus
                        />
                      </Grid>

                      <Grid item>
                        <Button
                          variant="contained"
                          color="secondary"
                          type="submit"
                          className={styles.buttonBlock}
                        >
                          ارسال
                        </Button>
                      </Grid>

                      <Grid item>
                        <Typography component="h4" variant="caption">
                          {category}
                        </Typography>
                      </Grid>
                      <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={() => {
                          setOpen(false);
                        }}
                      >
                        <Alert
                          onClose={() => {
                            setOpen(false);
                          }}
                          severity="info"
                        >
                          {category}
                        </Alert>
                      </Snackbar>
                    </Grid>
                  </form>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
}

export default MainPage;
