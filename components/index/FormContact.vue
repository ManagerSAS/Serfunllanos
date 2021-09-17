<template>
    <v-row align="center" justify="center" class="mt-15 mb-15">
        <v-col cols="12">
            <v-card class="rounded-xl pa-2 shadow-principal">
                <v-row no-gutters align="center">
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-img
                            class="rounded-xl d-none d-lg-flex"
                            src="https://res.cloudinary.com/dbepipmro/image/upload/v1631899047/gradienta-7brhZmwXn08-unsplash_hxm7ok.jpg"
                            width="523"
                            height="780"
                        >
                            <div class="ma-15 pt-15 pb-15">
                                <h2 class="display-1 white--text mt-15 mb-15"> Informacion de contacto </h2>
                                <v-row no-gutters class="mb-6">
                                    <v-col cols="2">
                                        <v-icon color="white"> mdi-email mdi-24px </v-icon>
                                    </v-col>
                                    <v-col cols="10">
                                        <p class="white--text">contactenosvillavicencio@losolivos.co </p>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters class="mb-6">
                                    <v-col cols="2">
                                        <v-icon color="white"> mdi-phone mdi-24px </v-icon>
                                    </v-col>
                                    <v-col cols="10">
                                        <p class="white--text">668 52 86 - 018000 915286 </p>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters class="mb-6">
                                    <v-col cols="2">
                                        <v-icon color="white"> mdi-map-marker mdi-24px </v-icon>
                                    </v-col>
                                    <v-col cols="10">
                                        <p class="white--text">Avenida 40 N° 20-05/15 </p>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-img>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6" class="pa-5">
                        <h2 class="secondary--text display-1 font-weight-bold mb-6">Contactanos</h2>
                        <p>En los Olivos Llanos Orientales atendemos y orientamos a nuestros afiliados para la coordinación de homenajes las 24 horas de día, los 365 días del año.</p>
                        <v-form>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-text-field
                                        label="Nombre"
                                        placeholder="Juan Manuel"
                                        color="teal accent-3"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-text-field
                                        label="Apellidos"
                                        placeholder="Camacho"
                                        color="teal accent-3"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-text-field
                                        label="Email"
                                        placeholder="email@example.com"
                                        color="teal accent-3"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-text-field
                                        label="Telefono"
                                        placeholder="3223821204"
                                        color="teal accent-3"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-text-field
                                        label="Dirección de contacto"
                                        placeholder="Carrera 14 # 22 - 28"
                                        color="teal accent-3"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-text-field
                                        label="Documento"
                                        placeholder="487975474547"
                                        color="teal accent-3"
                                        hint="El numero de documento no debe contener puntos."
                                        persistent-hint
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-text-field
                                        label="Ciudad"
                                        placeholder="ciudad residencia"
                                        color="teal accent-3"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-text-field
                                        label="Asunto"
                                        placeholder=""
                                        color="teal accent-3"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-textarea
                                        label="Mensaje"
                                        color="teal accent-3"
                                        rows="2"
                                        hide-details
                                    ></v-textarea>
                                    <v-row no-gutters align="center">
                                        <v-col cols="1">
                                            <v-checkbox
                                                color="teal accent-3"
                                                value=""
                                                hide-details
                                            ></v-checkbox>
                                        </v-col>
                                        <v-col cols="4">
                                            <div class="mt-5">
                                                <Nuxt-link to="#"> Ver términos y Condiciones </Nuxt-link>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-btn
                                        class="shadow-principal btn-hover"
                                        color="teal accent-3"
                                        rounded
                                        dark
                                    > Enviar mensaje </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>