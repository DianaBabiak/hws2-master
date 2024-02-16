import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string ) => void
}

export const pureChange = (sort: string , down: string , up: string ) => {
    if(sort === "") {
        return down
    } else if (sort === down) {
        return up
    } else if (sort === up) {
        return '' // Отключаем сортировку, если она уже в состоянии "вверх"
    } else {
        return down // По умолчанию возвращаем состояние "вниз", если сортировка не "вверх" и не "вниз"
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        console.log(sort, down, up,'hhhhhhhhh')
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

            {icon} {/*а это убрать*/}
        </span>
    )
}

export default SuperSort
