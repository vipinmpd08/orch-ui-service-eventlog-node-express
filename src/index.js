const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/orchestrator/api/events', (req, res) => {
    res.json(
        {
            "_embedded": {
                "events": [{
                    "eventType": "E_AIRB",
                    "source": "CORE",
                    "eventId": "Event 54",
                    "status": "READY",
                    "approvalRequired": "true",
                    "recievedTime": "2018-12-09T12:33:38.772Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0522%25257C2018-12-09%25257CE_AIRB%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0522%7C2018-12-09%7CE_AIRB%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "STD",
                    "source": "CORE",
                    "eventId": "Event 70",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:34:18.770Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0184%25257C2018-12-09%25257CSTD%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0184%7C2018-12-09%7CSTD%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "E_OFFB",
                    "source": "CORE",
                    "eventId": "Event 57",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:33:38.774Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0522%25257C2018-12-09%25257CE_OFFB%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0522%7C2018-12-09%7CE_OFFB%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "E_AIRB",
                    "source": "CORE",
                    "eventId": "Event 200",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:41:06.756Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0448%25257C2018-12-09%25257CE_AIRB%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0448%7C2018-12-09%7CE_AIRB%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "STA",
                    "source": "CORE",
                    "eventId": "Event 198",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:41:14.160Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0928%25257C2018-12-09%25257CSTA%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0928%7C2018-12-09%7CSTA%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "STD",
                    "source": "CORE",
                    "eventId": "Event 107",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:35:54.054Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0147%25257C2018-12-09%25257CSTD%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0147%7C2018-12-09%7CSTD%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "E_OFFB",
                    "source": "CORE",
                    "eventId": "Event 21",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:31:41.329Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0003%25257C2018-12-09%25257CE_OFFB%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0003%7C2018-12-09%7CE_OFFB%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "E_LAND",
                    "source": "CORE",
                    "eventId": "Event 250",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:42:49.290Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0031%25257C2018-12-09%25257CE_LAND%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0031%7C2018-12-09%7CE_LAND%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "STD",
                    "source": "CORE",
                    "eventId": "Event 56",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:33:38.768Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0522%25257C2018-12-09%25257CSTD%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0522%7C2018-12-09%7CSTD%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "STD",
                    "source": "CORE",
                    "eventId": "Event 97",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:35:36.690Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0352%25257C2018-12-09%25257CSTD%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0352%7C2018-12-09%7CSTD%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "E_ONB",
                    "source": "CORE",
                    "eventId": "Event 156",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:39:39.139Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0502%25257C2018-12-09%25257CE_ONB%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0502%7C2018-12-09%7CE_ONB%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "E_LAND",
                    "source": "CORE",
                    "eventId": "Event 187",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:41:04.159Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0953%25257C2018-12-09%25257CE_LAND%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0953%7C2018-12-09%7CE_LAND%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "A_OFFB",
                    "source": "CORE",
                    "eventId": "Event 95",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:35:36.707Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0352%25257C2018-12-09%25257CA_OFFB%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0352%7C2018-12-09%7CA_OFFB%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "A_LAND",
                    "source": "CORE",
                    "eventId": "Event 91",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:35:36.701Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0352%25257C2018-12-09%25257CA_LAND%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0352%7C2018-12-09%7CA_LAND%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "E_ONB",
                    "source": "CORE",
                    "eventId": "Event 134",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:38:01.741Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0587%25257C2018-12-09%25257CE_ONB%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0587%7C2018-12-09%7CE_ONB%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "A_OFFB",
                    "source": "CORE",
                    "eventId": "Event 146",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:39:29.120Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0206%25257C2018-12-09%25257CA_OFFB%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0206%7C2018-12-09%7CA_OFFB%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "A_AIRB",
                    "source": "CORE",
                    "eventId": "Event 189",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:41:04.172Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0953%25257C2018-12-09%25257CA_AIRB%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0953%7C2018-12-09%7CA_AIRB%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "E_OFFB",
                    "source": "CORE",
                    "eventId": "Event 75",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:34:18.785Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0412%25257C2018-12-09%25257CE_OFFB%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0412%7C2018-12-09%7CE_OFFB%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "E_AIRB",
                    "source": "CORE",
                    "eventId": "Event 222",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:42:09.208Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0702%25257C2018-12-09%25257CE_AIRB%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0702%7C2018-12-09%7CE_AIRB%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }, {
                    "eventType": "E_LAND",
                    "source": "CORE",
                    "eventId": "Event 212",
                    "status": "READY",
                    "approvalRequired": "false",
                    "recievedTime": "2018-12-09T12:41:44.176Z",
                    "alert": null,
                    "_links": {
                        "self": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%25257C0528%25257C2018-12-09%25257CE_LAND%25257CREADY"
                        },
                        "event": {
                            "href": "http://92b7391c.ngrok.io/orchestrator/api/events/EK%7C0528%7C2018-12-09%7CE_LAND%7CREADY{?projection}",
                            "templated": true
                        }
                    }
                }]
            },
            "_links": {
                "self": {
                    "href": "http://92b7391c.ngrok.io/orchestrator/api/events"
                },
                "profile": {
                    "href": "http://92b7391c.ngrok.io/orchestrator/api/profile/events"
                }
            }
        }
    );
});

app.listen(port, () => console.log(`Mock server listening on port ${port}`));
