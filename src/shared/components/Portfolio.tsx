import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import { ProjectItem } from "./ui/ProjectItem";

const PortfolioComponent = () => {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const mediumScreen = useMediaQuery("(max-width:1200px)");
    const largerScreen = useMediaQuery(theme.breakpoints.up("lg"));

    type Project = {
        id: number
        title: string
        description: string
        image: string
    }

    const ProjectData: Project[] = [
        {
            id: 1,
            title: 'Storager - Your Store Manager',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/projetcEx.png'
        },
        {
            id: 2,
            title: 'Storager - Your Store Manager',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/projetcEx.png'
        },
        {
            id: 3,
            title: 'Storager - Your Store Manager',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/projetcEx.png'
        },
        {
            id: 4,
            title: 'Storager - Your Store Manager',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/projetcEx.png'
        },
    ]

    const ProjectComponent = (project: Project) => {
        return (
            <Box display={'flex'} width={'60%'} gap={mediumScreen? theme.spacing(7) : theme.spacing(8)} {...(mediumScreen ? {flexDirection: 'column-reverse', alignItems: project.id % 2 === 0? 'flex-end' : 'flex-start'} : {flexDirection: project.id % 2 === 0? 'row' : 'row-reverse', alignItems: 'flex-start'})}>
                <Box width={'100%'}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={mediumScreen && project.id % 2 === 0? 'flex-end' : 'flex-start'}>
                        <Typography variant="projectNumber" color={theme.palette.primary.main}>Projeto {project.id}</Typography>
                        <Typography variant="projectName">Storager - Your Store Manager</Typography>
                    </Box>
                    <Typography textAlign={'justify'}>Lorem ipsum odor amet, consectetuer adipiscing elit. Vehicula massa feugiat lacinia nullam dignissim vulputate. Risus bibendum aliquam donec ante dictum sagittis. Mauris senectus ridiculus nascetur parturient; per parturient fusce molestie? Orci condimentum nostra fames consequat nisl. Non lacinia nunc netus litora torquent hac nostra sapien. Dolor in netus et rhoncus neque dis nam.</Typography>
                    <Typography fontFamily={'Staatliches'} color={theme.palette.primary.main}> ➞ ler mais </Typography>
                </Box>
                <Box sx={(theme) => ProjectItem(theme, mediumScreen ? '-30px' : '30px')} {...(mediumScreen ? { width: '70%' } : { width: theme.spacing(120) })}>
                    <img src={`/images/projetcEx.png`} style={{ width: '100%', height: 'auto' }} />
                </Box>
            </Box>
        )
    }

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={theme.spacing(15)} width={'100%'}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(2)}>
                <Typography variant="sectionTitle"> Portfolio </Typography>
                <Box display={'flex'} width={'fit-content'} justifyContent={'space-between'} gap={theme.spacing(5)}>
                    <Typography variant="projectType" color={theme.palette.primary.main}> Web </Typography>
                    <Typography variant="projectType"> Desktop </Typography>
                    <Typography variant="projectType"> Mobile </Typography>
                    <Typography variant="projectType"> Games </Typography>
                    <Typography variant="projectType"> Others </Typography>
                </Box>
            </Box>
            <Box display={'flex'} gap={mediumScreen? theme.spacing(9) : theme.spacing(15)} flexDirection={'column'} alignItems={'center'}>
                {ProjectData.map((project) => (
                    <ProjectComponent key={project.id} {...project}/>
                ))}
            </Box>
        </Box>
    )
}

export default PortfolioComponent;