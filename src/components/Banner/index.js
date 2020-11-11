import React from 'react';
import './Banner.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import { banners } from './BannerList';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: '100%',
    },
}));

const Banner = () => {
    const classes = useStyles();

    return (
        <div className="banner-container">
            <div className="banner-main">
                <img
                    src="https://images.eq3.com/image-service/5c9a7c6b-efcb-48f9-968a-ba9f97bf28d2/COMPRESSED.png"
                    alt=""
                />
                <div className="banner-overlay">
                    <button>Shop Now</button>
                </div>
            </div>
            <GridList
                cols={3}
                cellHeight={160}
                style={{margin:0}}
                className={classes.gridList}
            >
                {banners.map((banner, idx) => (
                    <GridListTile key={idx} cols={banner.cols || 1}>
                        <img src={banner.image} alt="" />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default Banner;