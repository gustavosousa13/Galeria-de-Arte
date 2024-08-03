import PropTypes from 'prop-types';
import { Modal, Box, Typography, Backdrop, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImageModal = ({ open, handleClose, image, title }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        sx: {
          bgcolor: 'rgba(255, 255, 255, 0.7)', // Branco translúcido
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '90%',
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          p: 4,
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          position: 'relative'
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'black'
          }}
        >
          <CloseIcon sx={{fontSize:'30px'}}/>
        </IconButton>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: '50%', height: 'auto', mr: 2 }}
        />
        <Box sx={{ width: '50%', textAlign: 'left' }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

ImageModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageModal;
