import { Alert, Box, Grid } from "@mui/material";
import RecommendedShow from "./RecommendedShow";
import { useState } from "react";

const RecommendedShowList = () => {
  const [shows, setShows] = useState([
    {
      id: 234567253,
      title: "Berlin",
      category: "Drama",
      thumbnail: "https://placehold.co/600x400/000000/FFF?text=Berlin",
      description: "Berlin is a drama film directed by Michael Haneke.",
      isFavorite: true,
    },
    {
      id: 234567254,
      title: "Planet Earth II",
      category: "Documentary",
      thumbnail: "https://placehold.co/600x400/000000/FFF?text=Planet+Earth+II",
      description:
        "Planet Earth II is a documentary film directed by Michael Haneke.",
      isFavorite: true,
    },
    {
      id: 234567255,
      title: "The Elephant Man",
      category: "Drama",
      thumbnail:
        "https://placehold.co/600x400/000000/FFF?text=The+Elephant+Man",
      description:
        "The Elephant Man is a drama film directed by Michael Haneke.",
      isFavorite: false,
    },
  ]);

  const handleManageFavorites = (index: number) => {
    console.log("Clicked Manage Favorites " + index);
    // shows[index].isFavorite = !shows[index].isFavorite;
    // Updating state immmutably
    const duplicateShows = [...shows]; // using spread operator to create a new array
    duplicateShows[index].isFavorite = !duplicateShows[index].isFavorite;
    setShows(duplicateShows);
  };

  // Conditional Rendering outside JSX
  if (shows && shows.length === 0) {
    return (
      <Alert severity="warning">
        No Recommended Shows Found. Please watch more shows.
      </Alert>
    );
  }

  return (
    <Box>
      <Grid container spacing={2}>
        {/* Lists & Keys */}
        {shows.map((show, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={show.id}>
              <RecommendedShow
                {...show}
                index={index}
                handleManageFavorites={handleManageFavorites}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default RecommendedShowList;
