import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const Loading = () => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Skeleton variant="circle" width={40} height={40} />
                }
                title= {(<Skeleton variant="text"/>)}
                subheader={(<Skeleton variant="text"/>)}
            />
            <CardContent>
                <Skeleton variant="rect" width="100%" height={118} />
            </CardContent>
        </Card>
    );

}

export default Loading;