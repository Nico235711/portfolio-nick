import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Github, World } from "./Icons"

type ProjectDetailsProps = {
  url: string
  label: string
  githubUrl: string
  image: string
  description: string
}

export const ProjectDetails = ({ ...props }: ProjectDetailsProps) => {

  const { githubUrl, url, label, image, description } = props

  return (
    <div className="flex flex-col items-end h-full">
      <Card sx={{ maxWidth: 345, height: '100%' }}>
        <CardMedia
          sx={{ height: 150 }}
          image={`/img/${image}`}
          title={label}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {label}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href={githubUrl} target="_blank">
              <Github />
            </a>
          </Button>
          <Button size="small">
            <a href={url} target="_blank">
              <World />
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
