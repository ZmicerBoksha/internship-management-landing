import React from 'react'
import {Button, Grid, Typography} from '@material-ui/core'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100%',
      width: '70%',
      margin: '0 auto',
    },
    title: {
      maxWidth: 800,
      textAlign: 'center',
      color: '#406370',
      marginTop: theme.spacing(5),
      marginBottom: '2%',
      margin: 'auto',
      fontFamily: 'BlinkMacSystemFont',
    },
    subTitle: {
      maxWidth: 400,
      marginTop: '10%',
      padding: '5%',
      fontFamily: 'BlinkMacSystemFont',
      color: '#406370',
    },
    info: {
      maxWidth: 400,
      marginTop: theme.spacing(2),
      padding: '5%',
      fontFamily: 'BlinkMacSystemFont',
    },
  })
)
interface TopPageProps {
  title: string | undefined
  subTitle: string | undefined
  info: string | undefined

  imageUrl: string
}
const TopPage = (props: TopPageProps) => {
  const classes = useStyles()
  const {title, subTitle, info, imageUrl} = props
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h2" component="h1">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography className={classes.subTitle} variant="h3" component="h1">
            {subTitle}
          </Typography>
          <Typography className={classes.info} variant="h6" gutterBottom>
            {info}
          </Typography>
          <div
            style={{
              display: 'flex',
              width: '100%',
              padding: '5%',
            }}
          >
            <Button href="/#trainings" color="primary" variant="contained">
              Read More...
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <img
            alt="banner"
            src={imageUrl}
            width="100%"
            style={{objectFit: 'contain', height: 'max-content'}}
          />
        </Grid>
      </Grid>
    </div>
  )
}
export default TopPage
