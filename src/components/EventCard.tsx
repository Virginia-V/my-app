import * as React from "react";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  Link,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { FC } from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

interface EventCardProps {
  type: string;
  title: string;
  date: string;
  image: string;
  description: string;
  activities: string[];
  link: string;
}

export const EventCard: FC<EventCardProps> = (_props) => {
  const { type, title, date, image, description, activities, link } = _props;

  const [expanded, setExpanded] = React.useState(false);
  const [favorited, setFavorited] = React.useState(false); // Track favorite state
  const avatar = type.charAt(0).toUpperCase();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    setFavorited(!favorited); // Toggle favorite state
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia component="img" height="250" image={image} alt={title} />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavoriteIcon sx={{ color: favorited ? "red" : "inherit" }} />
        </IconButton>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Link>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>
            In this {type} you will gain an ability to:
          </Typography>
          {activities.map((activity) => (
            <Typography key={activity} sx={{ marginBottom: 1 }}>
              {activity}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};
