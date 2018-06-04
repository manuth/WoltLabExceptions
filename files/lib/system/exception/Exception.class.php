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
             * The error message that explains the reason for the exception.
             * 
             * @param \Exception $innerException
             * The exception that is the cause of the current exception, or a `null` reference if no inner exception is specified.
             */
            public function __construct($message = "", \Exception $innerException = null)
            {
                parent::__construct($message, 0, "", $innerException);
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