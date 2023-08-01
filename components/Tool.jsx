import { useTheme } from '@mui/material'
import ExpressIcon from './Icons/Express'
import NextIcon from './Icons/NextJS'
import ThreeJSIcon from './Icons/ThreeJS'
const Tool = ({ tool }) => {
    const theme = useTheme()

    return (
        <span className='tool' style={{ width: '160px', height: '50px' }}>
            <div style={{
                boxShadow: `0 10px 50px ${(tool?.name == 'NextJS' || tool?.name == 'ExpressJS' || tool?.name == 'ThreeJS') ? theme?.palette?.color?.main : tool?.color}`,
                border: `1px solid ${(tool?.name == 'NextJS' || tool?.name == 'ExpressJS' || tool?.name == 'ThreeJS') ? theme?.palette?.color?.main : tool?.color}`,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row-reverse',

            }}>
                <div style={{ height: '30px', width: '30px', objectFit: 'cover', overflow: 'hidden' }}>
                    {tool?.name == 'NextJS' && <NextIcon color={theme?.palette?.color?.main} />}
                    {tool?.name == 'ExpressJS' && <ExpressIcon color={theme?.palette?.color?.main} />}
                    {tool?.name == 'ThreeJS' && <ThreeJSIcon color={theme?.palette?.color?.main} />}
                    {tool?.name !== 'NextJS' && tool?.name !== 'ExpressJS' && tool?.name !== 'ThreeJS' && <img width='30px' height='30px' src={`/${tool?.name}.svg`} />}
                </div>
                <div >
                    {tool?.name}
                </div>
            </div>

        </span>

    )
}

export default Tool