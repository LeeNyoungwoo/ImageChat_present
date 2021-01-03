import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetData } from '../store/modules/ChatData';
import RightGrid from '../components/RightGrid/RightGrid';

export default function RightGridContainer() {
    const dispatch = useDispatch();

    const turn = useSelector(state => state.chatdata.turn);
    const botInfo = useSelector(state => state.chatdata.botInfo);

    const conv_resetData = () => {
        dispatch(resetData());
    }

    return (
        <RightGrid
            turn={turn}
            botInfo={botInfo}
            conv_resetData={conv_resetData}
        />
    );
}