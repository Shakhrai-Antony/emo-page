import React, {useState} from 'react'
import s from './sizeChart.module.scss'

export const SizeChart = (props: any) => {

    const sizesOptions = [{option: 'cm', id: 1}, {option: 'inches', id: 2}]
    const [sizeOption, setSizeOption] = useState(1)
    const [color, setColor] = useState(false)

    return (
        <div onClick={ () => props.setActive(false) } className={ props.active ? s.modal_active : s.modal }>
            <div className={props.active ? s.modal_content_active : s.modal_content} onClick={ e => e.stopPropagation() }>
                <span onClick={ () => props.setActive(false) } className={s.close_size}>x</span>
            <div>
                <h2>Product Name</h2>
                <p>Size Charts</p>
            </div>
            <div>
                <ul>
                    {sizesOptions.map(item => {
                        return (
                            <li className={ sizeOption === item.id ? s.li_color_active : s.li_color}
                                onClick={ () => { setSizeOption(item.id); setColor(!color) } }
                                key={item.id}>
                                {item.option}
                            </li>
                        )
                    })}
                </ul>
            </div>
                {sizeOption === 1 &&
                <div>
                    <tr>
                        <td></td>
                        <td>S</td>
                        <td>M</td>
                        <td>L</td>
                        <td>XL</td>
                        <td>2XL</td>
                    </tr>
                    <tr>
                        <td>BODY LENGTH</td>
                        <td>67.3</td>
                        <td>71.1</td>
                        <td>74.9</td>
                        <td>76.2</td>
                        <td>77.5</td>
                    </tr>
                    <tr>
                        <td>BODY WIDTH</td>
                        <td>49.5</td>
                        <td>53.3</td>
                        <td>58.4</td>
                        <td>63.5</td>
                        <td>66</td>
                    </tr>
                </div>
                }
                {sizeOption === 2 &&
                <div>
                    <tr>
                        <td></td>
                        <td>S</td>
                        <td>M</td>
                        <td>L</td>
                        <td>XL</td>
                        <td>2XL</td>
                    </tr>
                    <tr>
                        <td>BODY LENGTH</td>
                        <td>26.5</td>
                        <td>28</td>
                        <td>29.5</td>
                        <td>30</td>
                        <td>30.5</td>
                    </tr>
                    <tr>
                        <td>BODY WIDTH</td>
                        <td>19.5</td>
                        <td>21</td>
                        <td>23</td>
                        <td>25</td>
                        <td>26</td>
                    </tr>
                </div>
                }
            </div>
        </div>
    )
}