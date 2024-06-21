import React from "react";
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// HOC dùng để tái sử dụng hàm (Color giống như một class static chứa các hàm xử lý logic và các component khác sẽ gọi đến Color để lấy hàm mà không cần code lại)
const Color = (WrappedComponent) => {

    const randomColor = getRandomColor();
    return (props) => (
        <div style={{ color: randomColor }}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default Color;