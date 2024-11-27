import Button from '@mui/material/Button';

export default function TopButton({text, onPressed, styling}) {
    return (
        <Button variant={styling} onClick={onPressed}>{text}</Button>
    );
}