import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import ArticleCard from './ArticleCard';

export default function Articles() {
    const [loading, setLoading] = React.useState(true);
    const [loadedRows, setLoadedRows] = React.useState([]);
    const mounted = React.useRef(true);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setLoadedRows(json);
                setLoading(false);
            })
            .catch(err => console.log(err))

        return () => {
            mounted.current = false;
        };
    }, []);

    if (loading) return <CircularProgress />
    return (
        <Grid container spacing={3} >
            {loadedRows.map(post => (
                <Grid item key={post.id} xs={4}>
                    <ArticleCard title={post.title} body={post.title} />
                </Grid>
            ))}
        </Grid>
    );
}
