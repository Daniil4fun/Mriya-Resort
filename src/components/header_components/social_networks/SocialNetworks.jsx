import React from "react";
import RoundButton from "../../UI/round_button/RoundButton";
import fb from '../../../icons/fb.svg';
import tw from '../../../icons/tw.svg';
import insta from '../../../icons/insta.svg';
import classes from './SocialNetworks.module.css';

function SocialNetworks() {

    let styles = {
        div: {
            width: '48px',
            height: '48px',
            background: '#FFFFFF',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        RoundButton: {
            marginTop: '32px'
        }
    }

    return (
        <div className={classes.socialNetworksBtns}>
            <RoundButton>
                <div style={styles.div}>
                    <img src={fb} alt="fb" />
                </div>
            </RoundButton>
            <RoundButton style={styles.RoundButton}>
                <div style={styles.div}>
                    <img src={tw} alt="tw" />
                </div>
            </RoundButton>
            <RoundButton style={styles.RoundButton}>
                <div style={styles.div}>
                    <img src={insta} alt="insta" />
                </div>
            </RoundButton>
        </div>
    )
}

export default SocialNetworks;