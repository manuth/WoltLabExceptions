<?php
    /**
     * @author Manuel Thalmann <m@nuth.ch>
     * @license Apache-2.0
     *
     * @copyright © Manuel Thalmann 2018
     */
    namespace wcf\system\exception;
    {
        /**
         * Represents errors that occur during script execution.
         */
        class Exception extends SystemException implements IExtraInformationException
        {
            /**
             * A collection of key/value pairs that provide additional user-defined information about the exception.
             *
             * @var mixed[][]
             */
            protected $Data;

            /**
             * Initializes a new instance of the `Exception` class.
             *
             * @param string $message
             * @param integer $code
             * @param string $description
             * @param \Exception $previous
             */
            public function __construct($message = "", \Exception $previous = null)
            {
                parent::__construct($message, 0, "", $previous);
            }

            /**
             * Gets a collection of key/value pairs that provide additional user-defined information about the exception.
             *
             * @return mixed[][]
             */
            public function getData()
            {
                return $this->Data;
            }

            /**
             * Gets a collection of key/value pairs that provide additional user-defined information about the exception.
             *
             * @return mixed[][]
             */
            public function getExtraInformation()
            {
                return $this->getData();
            }
        }
    }
?>