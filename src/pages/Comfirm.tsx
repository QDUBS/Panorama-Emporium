import React, { useEffect } from 'react'
import Modal from '../components/Modal'
import { Link, useParams } from "react-router-dom"
import Button from '../shared/Button'
import { motion } from "framer-motion"
import { PageFadeInOut } from '../shared/motion'
import Head from '../shared/Head'
import { baseURL } from '../lib'

const Comfirm = () => {
    const params = useParams()

    useEffect(() => {
        console.log(params.token)
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"


        }
        const comfirmUser = async () => {

            const response = await fetch(`${baseURL}user/comfirm/${params.token}/`, config)
            const data = await response.json()
            console.log(data)
        }

        comfirmUser()
    })
    return (
        <>
            <Head title='Activate account' href='/' />

            <motion.section
                variants={PageFadeInOut}
                initial="initial"
                animate="animate"
            >

                <Modal>
                    <p>your account has be activated sucessfully</p>
                    <Button type='button'>
                        <Link to={"/login"}>OK</Link>
                    </Button>
                </Modal>
            </motion.section>
        </>
    )
}

export default Comfirm