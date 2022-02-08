import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Link } from "react-router-dom";
import list from '../../MOCK_DATA.json';

const useStyles = makeStyles({
    table: {
        border: '1px solid rgba(224, 224, 224, 1)',
        marginTop: 20
    },
    link: {
        backgroundColor: 'unset',
        color:'inherit'
    }
});

const Categories = () => {
    const classes = useStyles();
    return <>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Link to='/' className={classes.link}>
                            All Categories
                        </Link>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    list.map((category) => (

                        <TableRow key={category.id}>
                            <TableCell>
                                <Link to={`/?category=${category.name}`} className={classes.link}>
                                    {category.name}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </>;
};

export default Categories;
